import {
    initialState as initialNotificationState,
    reducer as reducerNotification
} from './notification';
import {
    initialState as initialGoogleMapState,
    reducer as reducerGoogleMap
} from './GoogleMap/index';
import {
    initialState as initialUserLocationState,
    reducer as reducerUserLocation
} from './userLocation';
import {
    initialState as initialGetOverViewStats,
    reducer as reducerGetOverViewStats
} from './getOverviewStats';
import {
    initialState as initialTaskLocationByCategory,
    reducer as reducerTaskLocationByCategory
} from './taskLocationByCategory';
import {
    initialState as initialTaskLocationByStatus,
    reducer as reducerTaskLocationByStatus
} from './taskLocationByStatus';
import {
    initialState as initialCompletedTasksHistogram,
    reducer as reducerCompletedTasksHistogram
} from './completedTasksHistogram';
import {
    initialState as initialDateRangePicker,
    reducer as reducerDateRangePicker
} from './dateRangePicker';

export const initialState = {
    notifications: initialNotificationState,
    googlemap: initialGoogleMapState,
    userLocation: initialUserLocationState,
    getOverviewStats: initialGetOverViewStats,
    taskLocationByStatus: initialTaskLocationByStatus,
    taskLocationByCategory: initialTaskLocationByCategory,
    completedTasksHistogram: initialCompletedTasksHistogram,
    dateRangePicker: initialDateRangePicker
};

export function reducer(state, action) {
    const nextNotification = reducerNotification(state.notifications, action);
    const nextGoogleMap = reducerGoogleMap(state.googlemap, action);
    const nextUserLocation = reducerUserLocation(state.userLocation, action);
    const nextGetOverviewStats = reducerGetOverViewStats(state.getOverviewStats, action);
    const nextTaskLocationByStatus = reducerTaskLocationByStatus(state.taskLocationByStatus, action);
    const nextTaskLocationByCategory = reducerTaskLocationByCategory(state.taskLocationByCategory, action);
    const nextCompletedTasksHistogram = reducerCompletedTasksHistogram(state.completedTasksHistogram, action);
    const nextDateRangePicker = reducerDateRangePicker(state.dateRangePicker, action);

    if (
        state.notifications === nextNotification &&
        state.googlemap === nextGoogleMap &&
        state.userLocation === nextUserLocation &&
        state.getOverviewStats === nextGetOverviewStats &&
        state.taskLocationByStatus === nextTaskLocationByStatus &&
        state.taskLocationByCategory === nextTaskLocationByCategory &&
        state.completedTasksHistogram === nextCompletedTasksHistogram &&
        state.dateRangePicker === nextDateRangePicker
    ) {
        return state;
    }

    return {
        notifications: nextNotification,
        googlemap: nextGoogleMap,
        userLocation: nextUserLocation,
        getOverviewStats: nextGetOverviewStats,
        taskLocationByStatus: nextTaskLocationByStatus,
        taskLocationByCategory: nextTaskLocationByCategory,
        completedTasksHistogram: nextCompletedTasksHistogram,
        dateRangePicker: nextDateRangePicker
    };
}
