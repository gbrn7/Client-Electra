import { Image, Spinner } from "react-bootstrap";
import { configs } from "../../configs";
import EButton from "../Button";
import { useNavigate } from "react-router-dom";

export default function ETBody({
  data,
  status,
  display,
  deleteAction,
  actionDisplay,
  editUrl,
  customAction,
}) {
  const navigate = useNavigate();

  return (
    <tbody>
      {status === "process" ? (
        <tr>
          <td colSpan={display.length} style={{ textAlign: "center" }}>
            <div className="d-flex text-center justify-content-center">
              <Spinner animation="border" variant="primary"></Spinner>
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((data, index) => {
          return (
            <tr key={index} className="">
              {Object.keys(data).map((key) => {
                return (
                  display.indexOf(key) > -1 && (
                    <td key={key}>
                      {key === "thumbnail" ? (
                        <Image
                          height={70}
                          width={70}
                          src={`${configs.api_image}/${data[key].files[0].path}`}
                        />
                      ) : key === "price" ? (
                        "Rp." + data[key]
                      ) : key === "status" ? (
                        <mark>{data[key].toUpperCase()}</mark>
                      ) : (
                        data[key]
                      )}
                    </td>
                  )
                );
              })}
              {actionDisplay && (
                <td>
                  {customAction && customAction(data._id, data.status)}
                  {editUrl && (
                    <EButton
                      variant={"success"}
                      classname={"mx-1"}
                      size={"sm"}
                      action={() => navigate(`${editUrl}/${data._id}`)}
                    >
                      Edit
                    </EButton>
                  )}
                  {deleteAction && (
                    <EButton
                      variant={"danger"}
                      classname={""}
                      size={"sm"}
                      action={() => deleteAction(data._id)}
                    >
                      Delete
                    </EButton>
                  )}
                </td>
              )}
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={display.length} style={{ textAlign: "center" }}>
            Data not found
          </td>
        </tr>
      )}
    </tbody>
  );
}
