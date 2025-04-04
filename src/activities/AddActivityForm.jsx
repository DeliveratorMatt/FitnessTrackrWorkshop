import useMutation from "../api/useMutation";

export default function AddActivityForm() {
  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/activities", ["activities"]);

  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    add({ name, description });
  };

  return (
    <>
      <p>Use this form to add a new activity:</p>
      <form action={addActivity}>
        <label>
          Activity Name
          <input type="text" name="name" />
        </label>
        <label>
          Activity Description
          <input type="text" name="description" />
        </label>
        <button>{loading ? "Adding..." : "Add Activity"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}
