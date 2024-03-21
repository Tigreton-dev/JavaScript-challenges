class ServiceWorker {
    worker = null;

    constructor() {
        this.createWorker();
    }

    createWorker() {
        this.worker = new Worker(new URL('./worker.js', import.meta.url));
        this.worker.onmessage = event => this.onWorkerResponse(event);
    }

    executeWorker(payload) {
        this.worker.postMessage(payload);
    }

    public onWorkerResponse(event) {
        if (event.data?.type === 'log' || event.data?.type === 'warn' || event.data?.type === 'error') {
            if (event.data.content[0] instanceof InternalError) {
                this.evento({ type: 'error', content: [`InternalError: ${event.data.content[0].message}`] });
            } else if (event.data.content[0] instanceof RangeError) {
                this.evento({ type: 'error', content: [`RangeError: ${event.data.content[0].message}`] });
            } else if (event.data.content[0] instanceof ReferenceError) {
                this.evento({ type: 'error', content: [`ReferenceError: ${event.data.content[0].message}`] });
            } else if (event.data.content[0] instanceof TypeError) {
                this.evento({ type: 'error', content: [`TypeError: ${event.data.content[0].message}`] });
            } else if (event.data.content[0] instanceof SyntaxError) {
                this.evento({ type: 'error', content: [`SyntaxError: ${event.data.content[0].message}`] });
            } else if (event.data.content[0] instanceof URIError) {
                this.evento({ type: 'error', content: [`URIError: ${event.data.content[0].message}`] });
            } else {
                this.evento({ type: event.data?.type, content: [`${event.data.content[0]}`] });
            }
        } else {
            if (event.data?.passedAllTests) {
                this.evento({ type: 'test', passesAllTests: true, testCases: event.data?.testCases });
            } else {
                this.evento({ type: 'test', passesAllTests: false, testCases: event.data?.testCases });
            }
        }
    }

    removeWorker() {
        worker.terminate();
    }
}

const serviceWorker = new ServiceWorker();

export default serviceWorker;
