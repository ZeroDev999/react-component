export type MyComponentProps = {
    title: string;
    description?: string;
    onClick: () => void;
};

export interface ExampleData {
    id: number;
    name: string;
    value: string;
}

export type CustomHookReturnType = {
    data: ExampleData[];
    loading: boolean;
    error: string | null;
};