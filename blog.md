---
layout: pageNoColumns
title: Blog
permalink: /blog/
---
<div class="siteContainer">
	<div class="container layout-blog">
		<div class="column l-blogHeader">
			<h1 class="giantHeading">Blog</h1>
		</div>
		<div class="column postsWrapper">
	  	{% for post in site.posts %}
	  		<div class="postPreview dblBorderBox">
	  			<img src="{{ post.image }}" alt="">
		      <h2>{{ post.title }}</h2> 
		      <p class="postPreview-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
		      <!-- is already in ap tag -->
		      {{ post.excerpt }}
		      <a href="{{ post.url }}" class="btn">View Post</a>
	  		</div>
	  	{% endfor %}  	
		</div>


		<aside class="column postsSidebar">
			<ul>
			  {% for category in site.categories %}
				  <li><a name="{{ category | first }}">{{ category | first }}</a>
				    <ul>
				    {% for posts in category %}
				      {% for post in posts %}
				        {% if post.url %}<li><a href="{{ post.url }}">{{ post.title }}</a></li>{% endif %}
				      {% endfor %}
				    {% endfor %}
				    </ul>
				  </li> 
				{% endfor %}
			</ul>
		</aside>
	</div>
</div>


<!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->


 