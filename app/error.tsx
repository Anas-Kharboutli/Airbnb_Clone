"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStatePRops {
    error: Error
}

const ErrorState: React.FC<ErrorStatePRops> = ({
    error
}) => {

    useEffect(()=> {
        console.error(error);
    }, [error])

  return (
    <EmptyState
    title="Uh oh"
    subtitle="Something went wrong"
    />
  )
}

export default ErrorState
