import Swal from "sweetalert2";
import { deleteProduct } from "../../services/productsService";

function DeleteProduct(props) {
  const { item, onReload } = props;

  const deleteItem = async () => {
    const result = await deleteProduct(item.id);
    if (result) {
      onReload();
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem();
      }
    });
  };

  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default DeleteProduct;
