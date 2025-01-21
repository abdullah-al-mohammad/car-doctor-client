import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: 'https://cardoctor-bdserver-delta.vercel.app/',
  withCredentials: true
})

const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    axiosSecure.interceptors.response.use((res) => {
      return res
    }, (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        // console.log('logout user');
        logOut()
          .then(result => {
            navigate('/signin')
          })
          .catch(error => console.error(error)
          )
      }
    })
  }, [])

  return axiosSecure

};

export default useAxiosSecure;