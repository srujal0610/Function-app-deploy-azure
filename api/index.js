module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: { message: "Hello from Azure Function API!" }
    };
};

