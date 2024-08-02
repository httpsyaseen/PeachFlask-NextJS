import toast from "react-hot-toast";

export function notify(status, message, error) {
  return status === "success" ? toast.success(message) : toast.error(error);
}
