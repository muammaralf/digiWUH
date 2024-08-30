import {useEffect} from "react";
import useUserStore from "../../store/user.store.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function Logout() {
  const {logout} = useUserStore()
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    toast.success('Berhasil keluar')

    setTimeout(() => {
      navigate('/masuk')
    }, 1000)
  }, [])

  return null
}