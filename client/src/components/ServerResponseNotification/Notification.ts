import {notification} from "antd";

export const errorNotification = (title: string, text: string): void => {
    notification.error({
        message: title,
        description: text,
    })
};

export const successNotification = (title: string, text: string): void => {
    notification.success({
        message: title,
        description: text
    })
}