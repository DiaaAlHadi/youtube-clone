import { Stack, Box } from "@mui/system"
import {VideoCard,ChannelCard} from './'
const Videos = ({ videos, direction }) => {
    if(!videos?.length) return <Box sx={{color:"#fff"}}>Loading...</Box>
    return (
        <Stack
            direction={{md:direction ||'row' ,xs:'row'}}
            // direction = {{md: "column" xs:"row"}}
            flexWrap='wrap'
            sx={{
                justifyContent:"center"
            }}
            gap={1}
        >
            {videos.map((item, idx) => (
                <Box
                    key={idx}
                    mb={'15px'}
                >
                    
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} border={"1px solid gray"} />}

                    {/* temp code until we proses the playlist */}

                    {!item.id.videoId &&!item.id.channelId && <VideoCard video={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos