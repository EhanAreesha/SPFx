import * as React from 'react';

export interface IEventInfoState {
    event: {
        name: string,
        location: string,
        organizers: string[],
        numOfAttendees: number
    }
}

const initialState: IEventInfoState = {
    event: {
        name: 'RC SharePoint Framework Development Training',
        location: 'Dhaka, Bangladesh',
        organizers: ['Kamrul', 'Masud'],
        numOfAttendees: 4
    }
}

class EventInfo extends React.Component<any, IEventInfoState> {

    readonly state: IEventInfoState = initialState;

    public render(): React.ReactElement<any> {
        return (
            <div>
                <img src="https://secure.meetupstatic.com/photos/event/8/c/e/0/600_466836064.jpeg" alt="test" />

                <div>
                    <h2>{this.state.event.name}</h2>
                    <div>{this.state.event.location}</div>
                    <div>{'Organizers: ' + this.state.event.organizers.join(', ')}</div>
                    <div>{this.state.event.numOfAttendees + ' attendees'}</div>
                </div>

            </div>
        );
    }
}
export default EventInfo;