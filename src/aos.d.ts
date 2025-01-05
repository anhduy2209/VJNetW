declare module 'aos' {
    interface AOSInstance {
        init(options?: any): void;
        refresh(): void;
    }

    const AOS: AOSInstance;
    export = AOS;
}
