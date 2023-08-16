import { Pagination } from "react-bootstrap";
import ETBody from "../ETBody";
import ETFoot from "../ETFoot";
import ETHead from "../EThead";

export default function ETable({
  title,
  textHead,
  textFoot,
  data,
  tbody,
  status,
  editUrl,
  customAction,
  deleteAction,
  withoutPagination,
  handlePageClick,
  page,
  actionDisplay,
}) {
  return (
    <>
      {title && <p className="m-0 pb-1  border-bottom border-dark">{title}</p>}
      <table id="" className="table table-striped">
        <ETHead textHead={textHead} />
        <ETBody
          data={data}
          status={status}
          display={tbody}
          deleteAction={deleteAction}
          customAction={customAction}
          editUrl={editUrl}
          actionDisplay={actionDisplay}
        />
        <ETFoot textFoot={textFoot ? textFoot : textHead ? textHead : ""} />
      </table>
      {!withoutPagination && data.length ? (
        <Pagination pages={page} onClick={handlePageClick} />
      ) : (
        ""
      )}
    </>
  );
}
