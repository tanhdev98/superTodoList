import TaskList from "@/components/TaskList"

export default function Home() {
    return (
        <section className="lists-container">
            <TaskList />
            <button className="add-list-btn btn">Add a list</button>
        </section>
    )
}