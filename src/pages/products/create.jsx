import { useState } from "react";
import Form from "./form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import EAlert from "../../components/Alert";

export default function ProductCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    desc: "",
    status: "publish",
    weights: "",
    thumbnail: "",
  });

  const [thumbnail, setThumbnail] = useState(null);

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const options = [
    {
      value: "publish",
      label: "Publish",
      target: { name: "status", value: "publish" },
    },
    {
      value: "draft",
      label: "Draft",
      target: {
        name: "status",
        value: "draft",
      },
    },
  ];

  const handleChange = (e) => {
    if (e.target?.name === "thumbnail") {
      if (
        e?.target?.files[0]?.type === "image/jpg" ||
        e?.target?.files[0]?.type === "image/png" ||
        e?.target?.files[0]?.type === "image/jpeg"
      ) {
        let size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);

        if (size > 2) {
          setAlert({
            ...alert,
            status: true,
            type: "danger",
            message: "Please select image size less than 3 MB",
          });
        } else {
          setThumbnail(URL.createObjectURL(e.target.files[0]));
          setForm({
            ...form,
            [e.target.name]: e.target.files[0],
          });
        }
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
      console.log(form);
    }
  };

  const uploadThumbnail = async (file) => {
    let formData = new FormData();
    formData.append("thumbnail", file);
    const res = await postData("/thumbnails", formData, true);
    return res;
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    console.log("form");
    console.log(form.thumbnail);

    if (form.thumbnail) {
      const resUpThumb = await uploadThumbnail(form.thumbnail);
      form.thumbnail = resUpThumb?.data?.data?._id;
      console.log("first");
    }

    const payload = {
      name: form.name,
      price: form.price,
      stock: form.price,
      desc: form.desc,
      status: form.status,
      weights: form.weights,
      thumbnail: form.thumbnail,
    };

    console.log("payload");
    console.log(payload);

    try {
      const res = await postData("/products", payload);

      dispatch(
        setNotif(
          true,
          "success",
          `Create ${res.data.data.name} product success`
        )
      );
      navigate("/products");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err?.response?.data?.msg,
      });
    }
  };

  return (
    <section className="content position-absolute w-100 h-100">
      <p className="text-black title mb-2">Data Produk</p>
      {alert.status && <EAlert type={alert.type} message={alert.message} />}
      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-md-10">
            <div className="card card-primary">
              <div className="card-header">
                <h5 className="card-title m-0">Tambah Data Produk</h5>
              </div>
              <div className="card-body">
                <Form
                  form={form}
                  isLoading={isLoading}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  isClearable={true}
                  options={options}
                  thumbVal={thumbnail}
                  btnClassname={"mt-2"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
