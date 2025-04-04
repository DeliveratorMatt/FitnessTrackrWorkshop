import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function ActivitiesList {
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

function ActivityListItem ({activity}) {
    const { token } = useAuth();
    const {
        mutate: deleteActivity,
        loading,
        error,
    } = useMutation("DELETE", "/activities" + activity.id, ["activities"])

    return (
        <li>
            <span>{activity.name}</span>
            if(token) {
                 <button onClick={() => deleteActivity()}>
                 {loading ? "Deleting" : error ? error : "Delete"}
                 </button>
                }
        </li>
    );
}