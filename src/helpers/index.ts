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

export const createCalendar = (members: ListMember[], startDate: Date): CalendarEvent[] => {
    let result: CalendarEvent[] = [];

    members.sort((a, b) => (a.id as number) - (b.id as number));

    members = members.filter((item) => !item.isPrivileged)

    let currentIndex = 0;
    let fridayIndex = 0;

    let availableMembers = members.filter(item => !item.isPrivileged);
    let fridayMembers = availableMembers.filter(item => !item.isNonResident);


    for (let i = 0; i <= 30; i++) {
        let day = new Date(startDate);
        day.setDate(day.getDate() + i);

        if (day.getDay() === 5) {
            if (fridayIndex >= fridayMembers.length) {
                fridayIndex = 0;
            }

            result.push(new CalendarEvent(`${fridayMembers[fridayIndex].lastName} ${fridayMembers[fridayIndex].firstName[0]}.`, day, day, true));
            fridayIndex++;

            if (fridayIndex >= fridayMembers.length) {
                fridayIndex = 0;
            }

            result.push(new CalendarEvent(`${fridayMembers[fridayIndex].lastName} ${fridayMembers[fridayIndex].firstName[0]}.`, day, day, true));
            fridayIndex++;
        } else if (day.getDay() !== 6 && day.getDay() !== 0) {
            if (currentIndex >= availableMembers.length) {
                currentIndex = 0;
            }

            result.push(new CalendarEvent(`${members[currentIndex].lastName} ${members[currentIndex].firstName[0]}.`, day, day, true));
            currentIndex++;

            if (currentIndex >= availableMembers.length) {
                currentIndex = 0;
            }

            result.push(new CalendarEvent(`${members[currentIndex].lastName} ${members[currentIndex].firstName[0]}.`, day, day, true));
            currentIndex++;
        }
    }


    return result;
};

