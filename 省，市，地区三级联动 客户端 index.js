$(function(){

    initProvince();
    function initProvince(){
        $.get("/api/v1/getAddressData",{},function(res){
            if(res.status=="y"){
                var strOption = "";
                $(res.data).each(function(index){
                    strOption += '<option value="'+this.ProID+'">'+this.name+'</option>'
                })
                $("#province").html($(strOption));
            }
        },"json");
    }

    ////当省份数据选择改变的时候
    $("#province").change(function(){
        // console.log($(this).val());
        $("#area").html($(''));
        var proId= $(this).val();
        // var that = this;
        $.get('/api/v1/getAddressData/city',{},function(res){
            if(res.status=="y"){
                var strOption = "<option>请选择城市</option>";
                $(res.data).each(function(index){
                    if(this.ProID==proId){
                    strOption += '<option value="'+this.CityID+'">'+this.name+'</option>'
                }
                })
                $("#city").html($(strOption));
            }

        },'json');
    });

       $("#city").change(function(){
        console.log($(this).val());
        var cityId = $(this).val();
        // var that = this;
        $.get('/api/v1/getAddressData/city/area',{},function(res){
            if(res.status=="y"){
                var strOption = "<option>请选择地区</option>";
                $(res.data).each(function(index){
                    if(this.CityID==cityId){
                    strOption += '<option value="'+this.Id+'">'+this.DisName+'</option>'
                }
                })
                $("#area").html($(strOption));
            }

        },'json');
    });

})
