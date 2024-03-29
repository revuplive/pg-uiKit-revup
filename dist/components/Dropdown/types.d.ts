/// <reference types="react" />
export declare type Position = "top" | "top-right" | "bottom";
export interface PositionProps {
    position?: Position;
}
export interface DropdownProps extends PositionProps {
    target: React.ReactElement;
    contentClassName?: string;
    className?: string;
}
