import React from 'react';
import { render } from '@testing-library/react';
import { getEvents } from '../api';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';


describe('Event component', () => {
    let allEvents;
    let EventComponent;

    beforeAll(async () => {
        allEvents = await getEvents();
    })
    beforeEach(() => {
        EventComponent = render(<Event event={allEvents[0]} />);
    })


    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
        console.log("Event Summary:", allEvents[0].summary); //  to debug

    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();

    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    test('event details are hidden by default', () => {
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });

    test("renders event details when user clicks 'show details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        await user.click(button, 'Show Details');
        const details = EventComponent.container.querySelector('.details')
        expect(details).toBeInTheDocument();
    });

    test("hides the details section when user clicks on the 'hide details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        const details = EventComponent.container.querySelector('.details')
        await user.click(button, 'Hide Details');
        expect(details).not.toBeInTheDocument();
    });
});


