interface errorStatusListModel {
    statusCode: number;
    statusMsg: string;
}

export const errorStatusList: any[] = [
    { statusCode: 401, statusMsg: "Unauthorized"},
    { statusCode: 400, statusMsg: "Bad Request"},
    { statusCode: 404, statusMsg: "Page Not Found"},
    { statusCode: 403, statusMsg: "Forbidden"},
    { statusCode: 500, statusMsg: "Unexpected Error"},
    { statusCode: 503, statusMsg: "Service Unavailable"}
]