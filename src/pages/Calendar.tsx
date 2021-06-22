import React, { useState, useEffect } from 'react';
import { ListMember } from '../interfaces';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { getList } from '../services/list.service';
import { Calendar as BigCalendar, momentLocalizer, Messages } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/uk';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css';
import useWindowDimensions from '../hooks/useWindowDimensions';
import CalendarEvent, { createCalendar } from '../helpers';
import AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';

moment.updateLocale("uk", {
    week: {
        dow: 1,
        doy: 1
    }
});

const localization: Messages = {
    date: 'Дата',
    allDay: 'Увесь день',
    time: 'Час',
    event: 'Чергові',
    noEventsInRange: 'Додайте чергових'
};

const localizer = momentLocalizer(moment);

const Calendar = () => {
    let history = useHistory();
    const [events, setEvents] = useState<CalendarEvent[] | null>(null);
    const [title, setTitle] = useState('Календар чергування');
    const [loading, setLoading] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const res = await getList();
                let events = createCalendar((res.data.members as ListMember[]));
                setTitle(res.data.name);
                setEvents(events);
                setLoading(false);
            } catch (err) {
                if (err.response.status === 401) {
                    AuthService.logout();
                    history.push('/');
                }

                setLoading(false);
            }
        })();
    }, [width]);

    return (
        <div className={styles.calendarContainer}>
            <h1>
                {
                    loading ?
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 25 }} spin />} /> :
                        title
                }
            </h1>
            <div className={styles.сalendarBox}>
                {
                    loading ?
                        <div className={styles.calendarLoading}>
                            <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
                        </div> :
                        <BigCalendar
                            events={events ? events : []}
                            step={60}
                            defaultView={
                                width > 768 ?
                                    'month' :
                                    'agenda'
                            }
                            defaultDate={new Date()}
                            localizer={localizer}
                            messages={localization}
                        />
                }
            </div>
        </div>
    );
};

export default Calendar;