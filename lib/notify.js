import toast from "react-hot-toast";

export function notify(status, message, error) {
  if (typeof error === "object") error = "Something went wrong";
  return status === "success" ? toast.success(message) : toast.error(error);
}
