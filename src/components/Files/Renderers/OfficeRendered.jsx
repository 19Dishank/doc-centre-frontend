const OfficeRendered = ({ fileUrl }) => {
    const encodedFileUrl = encodeURIComponent(fileUrl);

    return (
        <iframe
            src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodedFileUrl}`}
            width="100%"
            className="h-full rounded-md"
            title="Office Document"
        />
    );

};

export default OfficeRendered;