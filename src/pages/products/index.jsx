import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/actions";
import ETable from "../../components/ETable";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetch";
import { setNotif } from "../../redux/notif/actions";
import EAlert from "../../components/Alert";
import EButton from "../../components/Button";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notif = useSelector((state) => state.notif);
  const datas = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this product",
      text: "You could not recover this product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#19875",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/products/${id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `Success delete ${res.data.data.name} product`
          )
        );
        dispatch(fetchProducts());
      }
    });
  };

  return (
    <section className="content position-absolute vh-100">
      <p className="text-black title">Data Produk</p>

      {notif.status && (
        <EAlert type={notif.typeNotif} message={notif.message} />
      )}

      <div className="btn-wrapper mt-2">
        <EButton
          variant={"success"}
          children={"Create Product"}
          size={"md"}
          classname={"mb-2"}
          action={() => navigate("product/create")}
        />
      </div>

      <div className="Produk mt-2 mb-2 col-11">
        <ETable
          data={datas.data}
          status={datas.status}
          actionDisplay
          textHead={["Name", "Price", "Stock", "Status", "Thumbnail", "Action"]}
          tbody={["name", "price", "stock", "status", "total", "thumbnail"]}
          editUrl={`/categories/edit`}
          deleteAction={(id) => handleDelete(id)}
        />
      </div>
    </section>
  );
}

export default Products;
