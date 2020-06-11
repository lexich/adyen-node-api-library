var EncryptedContent = (function () {
    function EncryptedContent() {
    }
    EncryptedContent.getAttributeTypeMap = function () {
        return EncryptedContent.attributeTypeMap;
    };
    EncryptedContent.discriminator = undefined;
    EncryptedContent.attributeTypeMap = [
        {
            "name": "contentEncryptionAlgorithm",
            "baseName": "ContentEncryptionAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "contentType",
            "baseName": "ContentType",
            "type": "ContentType"
        },
        {
            "name": "encryptedData",
            "baseName": "EncryptedData",
            "type": "AnyType"
        }
    ];
    return EncryptedContent;
}());
export { EncryptedContent };
//# sourceMappingURL=encryptedContent.js.map