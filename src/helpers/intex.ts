import { ListMember } from "../interfaces";

export const validationMessages = {
    types: {
        email: 'Введіть валідний email',
    }
};

export default class CalendarEvent {
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
    desc: string;
    resourceId?: string;
    tooltip?: string;

    constructor(_title: string, _start: Date, _endDate: Date, _allDay?: boolean, _desc?: string, _resourceId?: string) {
        this.title = _title;
        this.allDay = _allDay || false;
        this.start = _start;
        this.end = _endDate;
        this.desc = _desc || '';
        this.resourceId = _resourceId;
    }
};

export const createCalendar = (members: ListMember[]): CalendarEvent[] => {
    let result: CalendarEvent[] = [];

    members.sort((a, b) => (a.id as number) - (b.id as number));
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let currentIndex = 0;

    for (let i = 1; i <= daysInMonth; i++) {
        let day = new Date(currentYear, currentMonth, i);
        if (day.getDay() !== 6 && day.getDay() !== 0) {
            if (currentIndex === members.length) {
                currentIndex = 0;
            }

            result.push(new CalendarEvent(`${members[currentIndex].lastName} ${members[currentIndex].firstName[0]}.`, day, day, true));
            currentIndex++;

            if (currentIndex === members.length) {
                currentIndex = 0;
            }

            result.push(new CalendarEvent(`${members[currentIndex].lastName} ${members[currentIndex].firstName[0]}.`, day, day, true));
            currentIndex++;
        }
    }

    return result;
};

