using AutoMapper;
using BLL.DTO;
using DAL.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Pokemon, PokemonDTO>().ReverseMap();
            CreateMap<PokeObject, PokeObjectDTO>().ReverseMap();


            CreateMap<SpeciesDTO, Species>().ReverseMap();
            CreateMap<OtherDTO, Other>().ReverseMap();
            CreateMap<VersionsDTO, Versions>().ReverseMap();
            CreateMap<Sprites, SpritesDTO>().ReverseMap();
            CreateMap<Dream_WorldDTO, Dream_World>().ReverseMap();
            CreateMap<OfficialArtworkDTO, OfficialArtwork>().ReverseMap();
            CreateMap<GenerationIDTO, GenerationI>().ReverseMap();
            CreateMap<RedBlueDTO, RedBlue>().ReverseMap();
            CreateMap<YellowDTO, Yellow>().ReverseMap();
            CreateMap<GenerationIiDTO, GenerationIi>().ReverseMap();
            CreateMap<CrystalDTO, Crystal>().ReverseMap();
            CreateMap<GoldDTO, Gold>().ReverseMap();
            CreateMap<SilverDTO, Silver>().ReverseMap();
            CreateMap<GenerationIiiDTO, GenerationIii>().ReverseMap();
            CreateMap<EmeraldDTO, Emerald>().ReverseMap();
            CreateMap<FireredLeafgreenDTO, FireredLeafgreen>().ReverseMap();
            CreateMap<RubySapphireDTO, RubySapphire>().ReverseMap();
            CreateMap<GenerationIvDTO, GenerationIv>().ReverseMap();
            CreateMap<DiamondPearlDTO, DiamondPearl>().ReverseMap();
            CreateMap<HeartgoldSoulsilverDTO, HeartgoldSoulsilver>().ReverseMap();
            CreateMap<PlatinumDTO, Platinum>().ReverseMap();
            CreateMap<GenerationVDTO, GenerationV>().ReverseMap();
            CreateMap<BlackWhiteDTO, BlackWhite>().ReverseMap();
            CreateMap<AnimatedDTO, Animated>().ReverseMap();
            CreateMap<GenerationViDTO, GenerationVi>().ReverseMap();
            CreateMap<OmegarubyAlphasapphireDTO, OmegarubyAlphasapphire>().ReverseMap();
            CreateMap<XYDTO, XY>().ReverseMap();
            CreateMap<GenerationViiDTO, GenerationVii>().ReverseMap();
            CreateMap<IconsDTO, Icons>().ReverseMap();
            CreateMap<UltraSunUltraMoonDTO, UltraSunUltraMoon>().ReverseMap();
            CreateMap<GenerationViiiDTO, GenerationViii>().ReverseMap();
            CreateMap<Icons1DTO, Icons1>().ReverseMap();
            CreateMap<AbilityDTO, Ability>().ReverseMap();
            CreateMap<Ability1DTO, Ability1>().ReverseMap();
            CreateMap<FormDTO, Form>().ReverseMap();
            CreateMap<Game_IndicesDTO, Game_Indices>().ReverseMap();
            CreateMap<VersionDTO, DAL.Domains.Version>().ReverseMap();
            CreateMap<MoveDTO, Move>().ReverseMap();
            CreateMap<Move1DTO, Move1>().ReverseMap();
            CreateMap<Version_Group_DetailsDTO, Version_Group_Details>().ReverseMap();
            CreateMap<Move_Learn_MethodDTO, Move_Learn_Method>().ReverseMap();
            CreateMap<Version_GroupDTO, Version_Group>().ReverseMap();
            CreateMap<StatDTO, Stat>().ReverseMap();
            CreateMap<Stat1DTO, Stat1>().ReverseMap();
            CreateMap<TypeDTO, DAL.Domains.Type>().ReverseMap();
            CreateMap<Type1DTO, Type1>().ReverseMap();

        }
    }
}
