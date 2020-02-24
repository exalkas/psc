const welcome = user => {

    const URL = process.env.NODE_ENV === 'production' ? process.env.ROOT_URL : 'http://localhost:3000';

    return `
      <!DOCTYPE html>
        <html style="margin: 0; padding: 0;">
        
            <body style="margin: 0; padding: 0;">
                <table class="table" cellpadding="0" cellspacing="0" style="background-color: #eee; empty-cells: hide; margin: 0 auto; padding: 0; width: 600px;">
                    <tr>
                        <td style="background-color: #999592; margin: 0 auto;">
                            <h1 style="box-sizing: border-box; color: white; font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px; text-align: center; text-transform: uppercase;">Message from contact form</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="margin: 0 auto;padding-left: 2rem;">
                            <p>Name: ${user.name}</p>
                            <p>email: ${user.name}</p>
                            <p>subject: ${user.subject}</p>
                            <p>message: ${user.message}</p>
                        </td>
                    </tr>
                </table>
            </body>
        
            </html>
      `;
  };
  
  module.exports = { welcome };