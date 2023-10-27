import { Outlet } from "react-router-dom";
import BoardInfoBar from "./BoardInfoBar";
import Header from "./Header";

function BaseLayout({ children }) {
    return (
        <div className="base-layout">
            <Header />
            <BoardInfoBar />
            <main><Outlet></Outlet></main>
        </div>
    )

}

export default BaseLayout;