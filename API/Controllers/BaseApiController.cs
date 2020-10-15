/* used as a base class for apicontrollers. */

using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class BaseApiController : ControllerBase
    {
        
    }
}