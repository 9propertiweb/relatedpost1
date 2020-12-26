var labelArray = [<b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'>&quot;<data:label.name/>&quot;<b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if></b:loop></b:if>];
var relatedSettings = {
blogURL:&quot;<data:blog.homepageUrl/>&quot;,
relatedHeading:&quot;&lt;h4&gt;&lt;span&gt;Posting Terkait&lt;/span&gt;&lt;/h4&gt;&quot;,
relatedPosts:4,
relatedStyle:4,
thumbnailSize:&quot;w300-h200-p-nu&quot;,
defaultThumb:&quot;https://4.bp.blogspot.com/-BLiit18tHXA/V9gCeNNCXzI/AAAAAAAALt8/SF8SUhGI1m8QuoHklq24MKiIEwKHIqwBACLcB/w300-h200-c/no-thumb.png&quot;,
roundThumbs:false,
titleLength:&quot;auto&quot;,
snippetLength:45,
centerText:false,
openNewTab:false
};