class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
      if (this.collection.length <= 0) return 0;
      return (String(this.collection.length / this.itemsPerPage).includes(".") ? Math.floor(this.collection.length / this.itemsPerPage) + 1 : (this.collection.length / this.itemsPerPage));
    }
    pageItemCount(pageIndex) {
      if (this.collection.length <= 0 || pageIndex <= -1) return -1;
      const newArr = this.collection.slice(pageIndex * this.itemsPerPage, (pageIndex + 1) * this.itemsPerPage);
      return newArr.length <= 0 ? -1 : newArr.length;
    }
    pageIndex(itemIndex) {
        if (this.collection.length <= 0 || itemIndex > this.collection.length || itemIndex <= -1) return -1;
        if (this.itemsPerPage > this.collection.length) return 0;
        let newArr = [];
        for (let i = 0; i <= this.pageCount(); i++) {
            newArr.push(
                this.collection.slice(
                    i * this.itemsPerPage,
                    (i + 1) * this.itemsPerPage
                )
            );
        }
        const itemAtIndex = this.collection[itemIndex];
        let arrIndex;
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].indexOf(itemAtIndex) !== -1) {
                arrIndex = i;
            };
        }
        return arrIndex === undefined ? -1 : arrIndex;
    }
}