import { Link } from "react-router";
import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetail() {
  const params = useParams();
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading: loadingDelete,
    error: errorDelete,
  } = useMutation("DELETE", `/activities/${params.id}`, ["activities"]);

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${params.id}`, "activities");

  if (loading || !activity) return <p>Loading, please wait.</p>;
  if (error) return <p>Sorry. Error {error} occurred.</p>;

  return (
    <ul>
      <li>{activity.name}</li>
      <li>{activity.description}</li>
      <li>{activity.creatorName}</li>
      <li>
        {token && (
          <button onClick={() => deleteActivity()}>
            {loadingDelete ? "Deleting" : errorDelete ? errorDelete : "Delete"}
          </button>
        )}
      </li>
    </ul>
  );
}
