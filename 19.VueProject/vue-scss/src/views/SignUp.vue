<template>
    <div class="row">
        <div class="col-12">

            <section class="section mt-5">
                <div class="container">
                    <div class="row">
                        <div class="container container--xs">
                            <div class="woocommerce">
                               <div id="signup_div_wrapper">
                                    
                                    <h1 class="mb-1 text-center">Sign up</h1>
                                    <p class="fs-14 text-gray text-center mb-5">Redownload themes, get support, and review themes.</p>

                                        <form method="post" class="register">
                                            <p class="woocommerce-FormRow woocommerce-FormRow--first form-row form-row-first">
                                                <label for="">First Name <span class="required">*</span></label>
                                                <input type="text" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="sr_firstname" id="reg_sr_firstname" value="" required="">
                                            </p>

                                            <p class="woocommerce-FormRow woocommerce-FormRow--last form-row form-row-last">
                                                <label for="reg_sr_lastname">Last Name <span class="required">*</span></label>
                                                <input type="text" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="sr_lastname" id="reg_sr_lastname" value="" required="">
                                            </p>
                                    
                                    
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="reg_email">Email address <span class="required">*</span></label>
                                                <input type="email" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="email" id="reg_email" value="" required="">
                                            </p>

                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="reg_email">User ID <span class="required">*</span></label>
                                                <input type="number" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="" id="" value="" required="">
                                            </p>

                                    
                                            <p class="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                                <label for="reg_password">Password <span class="required">*</span></label>
                                                <input type="password" class="woocommerce-Input woocommerce-Input--text input-text form-control" name="password" id="reg_password" required="">
                                            </p>

                                    
                                            <!-- Spam Trap -->
                                            <div style="left: -999em; position: absolute;"><label for="trap">Anti-spam</label><input type="text" name="email_2" id="trap" tabindex="-1" autocomplete="off"></div>
                                    
                                            <p class="form-row form-row-wide mailchimp-newsletter">
                                                <input class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" id="mailchimp_woocommerce_newsletter" type="checkbox" name="mailchimp_woocommerce_newsletter" value="1" checked="checked"> <label for="mailchimp_woocommerce_newsletter" class="woocommerce-form__label woocommerce-form__label-for-checkbox inline"><span>Subscribe for Sales &amp; New Themes</span></label>
                                            </p><div class="clear"></div><div class="woocommerce-privacy-policy-text"></div>
                                            <p class="woocomerce-FormRow form-row">
                                                <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="6d3690849d"><input type="hidden" name="_wp_http_referer" value="/my-account/">            
                                                <input type="submit" class="btn btn-primary btn-brand btn-block btn-lg mb-4 mt-3" style="margin:0;" name="register" value="Sign Up">
                                           </p>

                                    
                                        </form>

                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>