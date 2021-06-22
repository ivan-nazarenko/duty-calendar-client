import React, { useState, useEffect } from 'react';
import ListForm from '../components/list/ListForm';
import { List as IList, ListMember } from '../interfaces';
import { Spin, notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { createList, editList, getList } from '../services/list.service';
import styles from './List.module.css';
import AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';

const List = () => {
    let history = useHistory();
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
            } catch (err) {
                if (err.response.status === 401) {
                    AuthService.logout();
                    history.push('/');
                }
                setLoading(false);
            }
        })();
    }, []);

    const onSubmit = async (newList: IList) => {
        console.log(newList);

        newList.members.forEach((item, i) => {
            if (!item.email) {
                delete newList.members[i].email;
            }
        });

        setListLoading(true);

        try {
            !list ? await createList(newList) : await editList(newList);
            setList(newList);
            setListLoading(false);
            notification.success({
                message: 'Зміни збережено'
            });
        } catch (err) {
            if (err.response.status === 401) {
                AuthService.logout();
                history.push('/');
            }

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