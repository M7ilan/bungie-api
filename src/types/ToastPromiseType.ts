type ToastPromiseType = (customFunction: () => Promise<any>, loadingMessage: string, successMessage: string, errorMessage: string) => Promise<any>;

export default ToastPromiseType;
