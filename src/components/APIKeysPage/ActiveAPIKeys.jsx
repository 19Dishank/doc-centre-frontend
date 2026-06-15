import { memo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import APIKeyDetails from "./APIKeyDetails";

const ActiveAPIKeys = ({ apiKeys, getApiKeys }) => {

    useEffect(() => {
        getApiKeys();
    }, []);

    return (
        <Card className="p-4 sm:p-6">
            <CardHeader className="p-0 gap-1 mb-6">
                <CardTitle className="text-base leading-6">Active API Keys</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex flex-col gap-6">
                {apiKeys.length === 0 ? (
                    <p className="text-sm text-zinc-500 text-center py-4">
                        No API keys generated yet.
                    </p>
                ) : (
                    apiKeys.map((item, index) => (
                        <APIKeyDetails
                            key={item._id}
                            item={item}
                            index={index}
                            getApiKeys={getApiKeys}
                        />
                    ))
                )}
            </CardContent>
        </Card>
    );
};

export default memo(ActiveAPIKeys);