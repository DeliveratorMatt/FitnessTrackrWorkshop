import useQuery from "../api/useQuery";
import { Link } from "react-router";

export default function ActivitiesList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  if (loading || !activities) return <p>Loading, please wait.</p>;
  if (error) return <p>Sorry. Error {error} occurred.</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  return (
    <li>
      <Link to={`/activities/${activity.id}`}>{activity.name}</Link>
    </li>
  );
}
