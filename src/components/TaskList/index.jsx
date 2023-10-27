import { Skeleton, Pagination, Button } from 'antd';
import { render } from '@/common/renderHelper';
import { useFetching } from '@/customHook/useFetching'
import { ReloadOutlined } from '@ant-design/icons'
import { getTasks } from '@/services/task';

export default function TaskList(props) {
    const { data, loading, error, page, loadPage, nextPage, prevPage, reload } = useFetching(getTasks);

    const element = <div className="list">
        <h3 className="list-title">Tasks to Do</h3>
        <Pagination showSizeChanger defaultCurrent={page.page} total={page.total} onChange={(page, pageSize) => {
            loadPage(page, pageSize);
        }} />
        <ul className="list-items">
            {
                loading ? Array(10).fill(0).map((item, index) => {
                    return <Skeleton key={index} active />
                }) :
                    data?.map(item => {
                        return <li key={item?.id}>{item?.attributes?.title}</li>
                    })
            }
        </ul>
        <button className="add-card-btn btn">Add a card</button>
    </div>

    let btnReload = <Button type="primary" icon={<ReloadOutlined />} onClick={() => {
        reload();
    }}>Reload</Button>

    return render(loading, error, element, btnReload);
}
