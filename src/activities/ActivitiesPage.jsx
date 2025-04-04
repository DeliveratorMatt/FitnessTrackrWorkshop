import { useAuth } from "../auth/AuthContext";
import ActivitiesList from "./ActivitiesList";
import AddActivityForm from "./AddActivityForm";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine doing all these activities!</p>
      <ActivitiesList />
      {token && <AddActivityForm />}
    </>
  );
}
