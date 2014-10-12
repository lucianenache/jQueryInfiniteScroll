

# jQueryInfiniteScroll
====================

infinite scroll library - Parses the response object and displays the data inside a div

### demo: http://lucianenache.github.io/jQueryInfiniteScroll/

### dependency ```jquery-x.x.x ```

### usage:



``` js

InfiniteList.setDisplay(displayFunction);

InfiniteList.setService(serviceEndPoint);

InfiniteList.loadData(startingOffset,limit);

```
* displayFunction : function used for the response data pagination.

* serviceEndPoint : the url to the REST service providing the data.

* startingOffset : set this to 0 - it is used to determine from what position to start when calling the endpoint.

* limit : number of items to load in one ```call()```
