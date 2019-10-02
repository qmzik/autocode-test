module.exports = {
	css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/scss/_vars.scss";
                    @import "@/scss/commonStyles.scss";
                    `
            }
        }
  }
};
