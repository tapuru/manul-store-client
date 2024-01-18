import { useParams } from "react-router-dom"

export const ProfilePage = () => {
  const {id} = useParams();

  const user = { id: 1, name: "Tapuru", email: "qweewq@gmail.com",  };

  return (
    <div>
      {id}
      {JSON.stringify(user)}
    </div>
  )
}