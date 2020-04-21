import NotificationViewer from '../NotificationsViewer';
import React from 'react';
import renderer from 'react-test-renderer';
import delay from 'redux-saga';

jest.mock('../../services/NotificationsService.js')

const notificationsService = require('../../services/NotificationsService')
describe(`The notification view`, () => {

    beforeAll(() => {
        notificationsService.__setCount(42);
    })

    it (`should display the correct number of notifications`, async() => {
        const tree = renderer.create(
            <NotificationViewer />
        )

        await delay();
        const instance = tree.root
        const component = instance.findByProps({className: `notifications`});
        const text = component.children[0]
        expect(text).toEqual(`42 Notifications Awaiting !`);
    })
})