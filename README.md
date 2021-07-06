# Jamstack Notes

There are many approaches to delivering websites.

The earliest model was purely static. Later, dynamic content became possible through running scripts on the server.

But now the server needed to have enough capacity to service every request. This lead to the introduction of different pieces of infrastructure, with load balancers and database servers in addition to web servers. Assets that were static and didn't need to be generated on the fly could now be stored on CDNs. All of this made the process more complicated.

Over time, browsers got more capable, processes matured and tooling improved.

So, what is the Jamstack?

Jamstack stands for JavaScript, APIs and Markup.

A stack is the layers of technology which deliver your site or application.

Jamstack means fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

For example, the Lamptack stands for Linux (operating system), Apache (HTTP routing and serving), MySQL (data access) and PHP (preprocessing). As load increases, you would typically have multiple servers all running this stack.

By contrast, with the Jamstack, a CDN/static server handles HTTP routing and serving, JavaScript and Markup effectively provide the runtime directly in the browser and APIs provide data access.

Jamstack is about having assets pre-rendered, leveraging the browser and operating without a web server.

With Jamstack, the stack has moved up a level to the browser.
