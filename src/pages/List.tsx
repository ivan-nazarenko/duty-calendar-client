import React, { useState, useEffect } from 'react';
import ListForm from '../components/list/ListForm';
import { List as IList, ListMember } from '../interfaces';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { createList, editList, getList } from '../services/list.service';
import styles from './List.module.css';

const List = () => {
    const [list, setList] = useState<IList | null>(null);
    const [loading, setLoading] = useState(false);

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

        setLoading(true);

        try {
            const res = !list ? await createList(list) : await editList(list);
            setList(res.data as IList);
            setLoading(false);

        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Список чергових</h1>
            {
                loading ?
                    <div className={styles.spinner}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
                    </div> :
                    <ListForm initialData={list} onSubmit={onSubmit} />
            }
        </div>
    );
};

export default List;