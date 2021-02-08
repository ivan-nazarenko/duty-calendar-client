import React, { useState, useEffect } from 'react';
import ListForm from '../components/list/ListForm';
import { List as IList, ListMember } from '../interfaces';
import { Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { createList, editList, getList } from '../services/list.service';
import styles from './List.module.css';

const List = () => {
    const [list, setList] = useState<IList | null>(null);
    const [loading, setLoading] = useState(false);
    const [listLoading, setListLoading] = useState(false);  

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const list = await getList();
                list.data.members.sort((a: ListMember, b: ListMember) => (a.id as number) - (b.id as number));
                setList(list.data as IList);
                setLoading(false);
            } catch {
                setLoading(false);
            }
        })();
    }, []);

    const onSubmit = async (list: IList) => {
        list.members.forEach((item, i) => {
            if (!item.email) {
                delete list.members[i].email;
            }
        });

        setListLoading(true);

        try {
            const res = !list ? await createList(list) : await editList(list);
            setListLoading(false);
            notification.success({
                message: 'Зміни збережено'
            });
        } catch (err) {
            setListLoading(false);
            notification.error({
                message: 'Під час збереження даних сталася помилка :('
            });
        }
    };

    return (
        <div>
            {
                loading ?
                    <div className={styles.spinner}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
                    </div> :
                    <>
                        <h1>Список чергових</h1>
                        <ListForm initialData={list} onSubmit={onSubmit} loading={listLoading} />
                    </>
            }
        </div>
    );
};

export default List;