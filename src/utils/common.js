import {
    USER_TYPE_SUBSCRIBER,
    USER_TYPE_GOFUNDIS,
    TASK_STATYS_COMPLETED,
    TASK_STATYS_ASSIGNED,
    TASK_STATYS_UNASSIGNED,
    TASK_STATYS_CANCELLED,
    TASK_STATYS_RATED,
    TASK_STATYS_SCHEDULED,
    TASK_STATYS_PERFORMED,
    CATEGORY_NEW_INSTALL_DECODER,
    CATEGORY_NEW_INSTALL_SIGNAL,
    CATEGORY_NEW_INSTALL_ERROR,
    CATEGORY_REPAIR_INSTALL_DECODER,
    CATEGORY_REPAIR_INSTALL_SIGNAL,
    CATEGORY_REPAIR_INSTALL_ERROR,
    GOFUNDIS_STATYS_OFFLINE,
    GOFUNDIS_STATYS_ONLINE
} from 'models/googlemap';
import {
    filter,
    isArray,
    curry
} from 'lodash/fp';

export const createMapOptions = curry(
    maps => (
        {
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_BOTTOM,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false
        }
    )
);

export const locationInScreen = curry(
    (location, nw, se) => (
        (nw.lat > location.lat && location.lat > se.lat) &&
        (nw.lng < location.lng && location.lng < se.lng)
    )
);

export const filterUser = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => {
            if (option.all.getOrElse(false)) {
                return option.all.getOrElse(false);
            } else if (item.type === USER_TYPE_SUBSCRIBER) {
                return option.subscriber.getOrElse(false);
            } else if (item.type === USER_TYPE_GOFUNDIS) {
                return option.gofundis.getOrElse(false);
            }
            return false;
        }, arr) : (false)
    )
);

export const filterTask = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => {
            if (option.all.getOrElse(false)) {
                return option.all.getOrElse(false);
            } else if (item.type === TASK_STATYS_COMPLETED) {
                return option.completed.getOrElse(false);
            } else if (item.type === TASK_STATYS_ASSIGNED) {
                return option.assigned.getOrElse(false);
            } else if (item.type === TASK_STATYS_UNASSIGNED) {
                return option.unassigned.getOrElse(false);
            } else if (item.type === TASK_STATYS_CANCELLED) {
                return option.cancelled.getOrElse(false);
            } else if (item.type === TASK_STATYS_PERFORMED) {
                return option.cancelled.getOrElse(false);
            } else if (item.type === TASK_STATYS_SCHEDULED) {
                return option.scheduled.getOrElse(false);
            } else if (item.type === TASK_STATYS_RATED) {
                return option.rated.getOrElse(false);
            }
            return false;
        }, arr) : (false)
    )
);

export const filterCategory = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => (
            (
                (item.type === CATEGORY_NEW_INSTALL_DECODER &&
                    item.category.name === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_NEW_INSTALL_SIGNAL &&
                    item.category.name === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_NEW_INSTALL_ERROR &&
                    item.category.name === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_DECODER &&
                    item.category.name === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_SIGNAL &&
                    item.category.name === option.getOrElse('')
                ) ||
                (item.type === CATEGORY_REPAIR_INSTALL_ERROR &&
                    item.category.name === option.getOrElse('')
                )
            )
        ), arr) : (false)
    )
);

export const filterGoFundis = curry(
    (option, arr) => (
        isArray(arr) ? filter(item => {
            if (option.all.getOrElse(false)) {
                return option.all.getOrElse(false);
            } else if (item.type === GOFUNDIS_STATYS_OFFLINE) {
                return option.offline.getOrElse(false);
            } else if (item.type === GOFUNDIS_STATYS_ONLINE) {
                return option.online.getOrElse(false);
            }
            return false;
        }, arr) : (false)
    )
);

export const filterCommon = curry(
    arr => (
        isArray(arr) ? filter(() => (true), arr) : (false)
    )
);
