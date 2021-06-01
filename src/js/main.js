$("#slick").ddslick({
    width:"100%",
    imagePosition: "left",
    selectText:"select language",
    onSelected: function (data) {
        $("#selected").html(data.selectedData.value)
    }
})