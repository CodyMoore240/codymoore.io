+++
date = "2016-03-06T21:06:38-06:00"
title = "Microsoft stopped supporting IE8-10, you should as well."
tag = "Browser Support"
image = "/assets/images/postImages/stopUsingIE8.jpg"
+++

We all know that supporting legacy browsers is one of the biggest pains when it comes to developing websites. What looks like the smallest bug may take hours to fix in IE8. Well the time has come, we no longer have to support IE8-10. Hopefully as you read this post you will agree with me.

The proof
-----
As of Jan 12, 2016 Microsoft stopped issuing security updates to any version of internet explorer below 11. This is taken straight from <https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support>:

>Beginning January 12, 2016, only the most current version of Internet Explorer available for a supported operating system will receive technical supports and security updates. Internet Explorer 11 is the last version of Internet Explorer, and will continue to receive security updates, compatibility fixes, and technical support on Windows 7, Windows 8.1, and Windows 10.

>After January 12, 2016, Microsoft will no longer provide security updates or technical support for older versions of Internet Explorer. Security updates patch vulnerabilities that may be exploited by malware, helping to keep users and their data safer. Regular security updates help protect computers from malicious attacks, so upgrading and staying current is important.

Besides Microsoft dropping support, IE8 only has .84% market share at the time of writing and usage is dropping fast.

But my client still needs me to support it...
-------
We had this issue with a couple of clients. Don't be afraid to let them know they are using an outdated unsupported browser. We explained that we had made the decision to stop supporting IE8-10 and included the information we had obtained from Microsoft. We also sent them the usage statistics for their respective websites showing how low the numbers were for the browsers in question. Rather than pushing back, all three clients were thankful that we had come to them with this information. They were not aware Microsoft was dropping support. Your clients should rely on your expertise and look for your recommendations.

What does this mean?
--------
It means now you can harness the full power of the web. In the last 3 months I have changed the way I build websites. Here are some CSS techniques that can be added to your arsenal:

* Flexbox
* Transitions
* Transforms
* Animations
* Media Queries

Several other commonly used CSS properties get a lot of great things added for them as well. IE11 surprisingly has pretty good support. Shockingly, Microsoft's newest browser, Microsoft Edge (which some people don't know is actually different from IE11) has really good support and is making Firefox and Safari look like the new IE.

IE-8 might be dead, but I still have to support 9 and 10 right?
--------
This is false. IE8 has always had more usage than IE9 and IE10 combined. The reason for this is because of Windows XP. IE8 was the highest version of Internet Explorer you could get on XP. So you had a large segment of people that had to use IE8 and couldn't go any higher.

IE9 and 10 on the other hand were only used on Windows 7 until IE11 came along. Once IE11 was released, Windows automatically updated users to IE11 unless the user specifically turned updates off. IE9 and 10 were only the flagship for a short time and never had usage higher than IE8.

So if you make the decision to stop supporting IE8, It makes no sense to support browsers that are used less than IE8.

Conclusion
----
I hope this sheds some light on the subject and I hope this arms you with the knowledge you need to make an informed decision. If you have anything to add or have any other questions feel free to hit me up on [twitter @240WebGuy](https://twitter.com/240WebGuy). Thanks for reading.
